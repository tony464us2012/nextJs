import React from 'react'

type PageProps = {
    params: {
        searchTerm: string
    }
}

type SearchResults = {
    organic_results: [
        {
            position: number;
            title: string;
            link: string;
            thumbnail: string;
            snippet: string
        }
    ]
}

const search = async (searchTerm: String) => {
    const res = await fetch (
        `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`)
        throw new Error("Whoops somthing broke")
        const data: SearchResults = await res.json()
        return data
    
}

const SearchResults = async ({params: {searchTerm}}: PageProps) => {
    const searchResults = await search(searchTerm)
  return (
    <div>
        <p className="text-gray-500 text-sm">You searched for: {searchTerm}</p>
        <ol className="space-y-5 p-5">
            {searchResults.organic_results.map((result) => (
                <li className="list-decimal" key={result.position}>
                    <p className="font-bold">{result.title}</p>
                    <p>{result.snippet}</p>
                </li>
            ))}
        </ol>
    </div>
    )
}

export default SearchResults