import { useEffect, useState } from "react";
import Meta from "components/meta";
import Container from "components/container";
import Image from "next/image";

export default function Works() {
  const [ogpData, setOgpData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const links = [
    {
      url: "https://nxpclab.github.io/nxpc.live-vol.70/",
      title: "NXPC Live Vol.70",
      description:
        "昨日（7/10）に完成したばかりのサイトです。背景はWebGLを、ページ遷移はApp Routerを使用しています。デザインが複雑なのでCSSレスポンシブに苦戦しました。制作期間:2週間",
    },
    {
      url: "https://nxpclab.info/vol.69/",
      title: "NXPC Live Vol.69",
      description:
        "2か月前に初めて作成した所属サークルのイベント告知用のサイトです。制作期間:3週間。",
    },
    {
      url: "https://fully-on-chain-no-code-tool.vercel.app/",
      title: "Fully On-Chain No-Code Tool",
      description:
        "大学時代の卒業研究で制作したブロックチェーンアプリです。誰でも簡単にフルオンチェーンNFTを作ることを目標に取り組みました。制作期間:1か月",
      defaultImage:
        "https://github.com/Kyoya67/FullyOnChain_NoCode_Tool/blob/main/image.png?raw=true",
    },
  ];

  const defaultImage = "about.jpg";

  useEffect(() => {
    async function fetchOgpData() {
      setIsLoading(true);
      const fetchedData = await Promise.all(
        links.map(async (link) => {
          try {
            const response = await fetch(
              `/api/get-ogp?url=${encodeURIComponent(link.url)}`
            );
            const data = await response.json();
            return {
              ...link,
              ogImage: data.ogImage || link.defaultImage || defaultImage,
            };
          } catch (error) {
            console.error(`Error fetching OGP data for ${link.url}:`, error);
            return { ...link, ogImage: link.defaultImage || defaultImage };
          }
        })
      );
      setOgpData(fetchedData);
      setIsLoading(false);
    }

    fetchOgpData();
  }, []);

  return (
    <Container>
      <Meta pageTitle="Works" />
      <h1 style={{ marginTop: "30px" }}>Works</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ marginTop: "20px" }}>
          <ul>
            {ogpData.map((data, index) => (
              <li key={index} style={{ marginBottom: "50px" }}>
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={data.ogImage}
                    alt={data.title}
                    layout="responsive"
                    width={1200}
                    height={630}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcwfC/HgAFfwI/r2nkvgAAAABJRU5ErkJggg=="
                    loading="lazy"
                  />
                  <p style={{ fontWeight: "bold", fontSize: "30px" }}>
                    {data.title}
                  </p>
                  <p>{data.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
}
