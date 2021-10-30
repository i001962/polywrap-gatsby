import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Web3ApiProvider } from '@web3api/react';
import PolywrapTest from "../components/polywraptest"

const SecondPage = () => (
  <Web3ApiProvider>
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <PolywrapTest />
  </Layout>
  </Web3ApiProvider>
)

export default SecondPage
