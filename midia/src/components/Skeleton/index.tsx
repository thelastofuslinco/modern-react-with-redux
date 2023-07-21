import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = (props: Props) => {
  return (
    <div
      className="animate-pulse bg-blue-300 border border-blue-300 shadow rounded-md p-4 max-w w-full mx-auto"
      {...props}
    />
  )
}

export default Skeleton
