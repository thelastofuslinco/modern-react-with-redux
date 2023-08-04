import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  times: number
}

const Skeleton = (props: Props) => {
  return (
    <>
      {Array(props.times)
        .fill(0)
        .map((v, index) => {
          return (
            <div
              {...props}
              key={index}
              className="animate-pulse bg-blue-300 border border-blue-300 shadow rounded-md h-10 max-w w-full mx-auto"
            />
          )
        })}
    </>
  )
}

export default Skeleton
