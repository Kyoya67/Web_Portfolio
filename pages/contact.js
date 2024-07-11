import React from "react";
import Container from "components/container";

export default function Contact() {
  return (
    <Container>
      <h1 style={{ marginTop: "30px", marginBottom: "20px" }}>Contact me</h1>
      <p style={{ marginBottom: "20px" }}>
        最後までご覧いただきありがとうございました。このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。
      </p>
      <form
        action="https://formspree.io/f/movavvqr"
        style={{ marginBottom: "220px" }}
        method="POST"
      >
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <textarea
            name="comment"
            placeholder="Comment"
            style={{ width: "100%", padding: "8px", height: "100px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#26a69a",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          SEND
        </button>
      </form>
    </Container>
  );
}
