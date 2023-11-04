interface LayoutContainerTypes {
  children: React.ReactElement
}

export default function LayoutContainer({ children }: LayoutContainerTypes) {
  return <div className='px-[280px] py-4'>{children}</div>
}
