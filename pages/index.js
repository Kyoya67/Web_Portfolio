import Meta from "components/meta";
import Container from "components/container";
import PostBody from "components/post-body";
import Accordion from "components/accordion";
import { TwoColumn, TwoColumnMain } from "components/two-column";
import Image from "next/image";
import eyecatch from "images/nagara.jpg";

export default function Home() {
  return (
    <Container>
      <Meta
        pageTitle="Profile"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <h1 style={{ marginTop: "30px" }}>Profile</h1>
      <h2 style={{ marginTop: "10px" }}>京谷凌汰</h2>

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 90vw"
          priority
          placeholder="blur"
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <h2>About Me</h2>
            <p>
              学部時代は会津大学で情報工学を学びました。卒論のテーマはブロックチェーンで、フルオンチェーンNFTをノーコードで開発できるwebアプリの開発を行いました。そのために、Next.js/Reactを学習中です。現在は情報科学芸術大学院大学（IAMAS）で、NFTアートにしかできない芸術的な表現方法を模索しています。
            </p>
            <h2>My Skill Set</h2>
            <ul>
              <li>
                <strong>Next.js</strong>
                <ul>
                  <li>サーバーサイドレンダリング、静的サイト生成</li>
                  <li>ページとルートの設定、動的ルーティング</li>
                  <li>
                    <code>next/image</code>
                    コンポーネントによる画像の最適化
                  </li>
                  <li>Vercelなどのプラットフォームへのデプロイ</li>
                </ul>
              </li>
              <br />
              <li>
                <strong>React</strong>
                <ul>
                  <li>関数コンポーネントとクラスコンポーネントの理解</li>
                  <li>CSS Modules、Styled Componentsの利用</li>
                  <li>フォームの作成とバリデーション</li>
                </ul>
              </li>
              <br />
              <li>
                <strong>HTML/CSS</strong>
                <ul>
                  <li>セマンティックなマークアップ</li>
                  <li>レスポンシブデザイン、アニメーション</li>
                </ul>
              </li>
              <br />
              <li>
                <strong>Solidity</strong>
                <ul>
                  <li>
                    ether.jsやweb3.jsを利用したフロントエンドとデータのやり取り
                  </li>
                  <li>ERC721、ERC721A、ERC1155の利用</li>
                  <li>オンチェーン、IPFS型、ダイナミックNFTの作成</li>
                </ul>
              </li>
            </ul>

            <h2>自己PR</h2>
            <Accordion heading="行動力">
              <p>
                大学入学前は筑波大学を目指し、二度の浪人を経験しましたが、結果が出ず地元の公立大学に進学しました。しかし、諦めることなく、大学1年から3年まで筑波大学への編入試験の勉強を継続しました。
                特に、情報量が少ない編入試験対策のため、SNSを活用して編入試験に合格した人々と連絡を取り合い、過去問題の入手や回答作成の協力を得ました。この経験は私の行動力を示す一例であり、困難に立ち向かい、積極的に解決策を模索する姿勢を学びました。
              </p>
            </Accordion>
            <Accordion heading="適応力">
              <p>
                編入試験での挑戦が続く中で、TOEICで700点（現在は660点）を取得しましたが、最終的には編入に失敗しました。この挫折を受け入れ、次の道を探す中で、NFTに強い関心を持つようになりました。自らの興味を追求し、スマートコントラクトの勉強を独学で進め、UdemyやCrypto
                Zombieといったプラットフォームを使い、NFTの技術的理解に情熱を注ぎました。
                この経験は私の適応力を示す一例であり、新たな興味を追求する過程でSolidityやNext.js/Reactの勉強を始め、プログラミングのスキルを習得することができました。困難に直面しても、柔軟に対応し、成長する姿勢を持ち続けています。
              </p>
            </Accordion>
            <Accordion heading="チャレンジ精神">
              <p>
                私はNFTの個展を開催し、独自のコントラクトで作成したNFTをポートフォリオに組み込みました。その結果、情報科学芸術大学院大学（IAMAS）というメディアアート専門の大学院に進学することができました。まだまだ成長の余地はありますが、常に新たな挑戦を続け、自分の目標を達成したいという強い意志を持っています
              </p>
            </Accordion>
          </PostBody>
        </TwoColumnMain>
      </TwoColumn>
    </Container>
  );
}
