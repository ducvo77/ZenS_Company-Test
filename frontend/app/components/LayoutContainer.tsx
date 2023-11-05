interface LayoutContainerTypes {
  children: React.ReactElement
}

export default function LayoutContainer({ children }: LayoutContainerTypes) {
  return (
    <div className="xl:px-52 lg:px-32 md:px-24 sm:px-12 px-6 py-4">
      {children}
    </div>
  )
}
