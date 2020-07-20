import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-gradient-wrapper">
        <main>{children}</main>
      </div>
    </>
  )
}
