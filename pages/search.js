import Head from "next/head";
import Header from "../Header.js";


function Search() {
    return (
        <div>
            <Head>
                <title>Search Results</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
        </div>
    )
}

export default Search;