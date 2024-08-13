import { ReactNode } from "react";

const Cards = (props: {children: ReactNode}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      {props.children}
    </div>
  )
}

export default Cards
