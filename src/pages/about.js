import React from "react";
import {graphql} from "gatsby";
import Layout from "gatsby-theme-blog/src/components/layout";
import Footer from "gatsby-theme-blog/src/components/home-footer";

export default ({data}) => {
  return (
      <Layout location={`ja`} title={data.site.siteMetadata.title}>
        <h1>竹中 陸 / Riku Takenaka</h1>
        <p>はじめまして。普段はしがないプログラマーとして働いていますが、友人に恵まれて日々ファンタスティックな生活を送っています。これは僕のサイトです。杜の都仙台に住み、コーヒーを片手に美しい建物のファサードを眺めるのが日課です。好きなものはチンザノドライのソーダ割り、そして在来線で遠出をすること。</p>
        <Footer socialLinks={data.site.siteMetadata.social}/>
      </Layout>
  )
}
export const query = graphql`
query MyQuery {
  site {
    siteMetadata {
      title
      author
      description
      social {
        name
        url
      }
    }
  }
}
    `