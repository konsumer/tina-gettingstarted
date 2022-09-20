import { TinaMarkdown } from 'tinacms/dist/rich-text'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import { useTina } from 'tinacms/dist/edit-state'
import { client } from '../.tina/__generated__/client'

const pageComponents = {
  Image: ({ type, ...props }) => <img {...props} />
}

export default function Home (props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  })
  return (
    <Layout>
      <Head>
        <title>{data.page.title}</title>
      </Head>
      <main className='page-content'>
        {(data?.page?.rows || []).map((row, i) => (
          <article key={i}>
            <TinaMarkdown components={pageComponents} content={row.block} />
          </article>
        ))}
      </main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: 'home.json'
  })

  return {
    props: {
      data,
      query,
      variables
    }
  }
}
