
const HeaderBox = ({type="title",title, subtext, user}:HeaderBoxProps) => {
  return (
    <div className=" flex flex-col gap-1">
        <h1 className=" text-lg lg:text-40 font-bold text-gray-900">
            {title}
            {type ==="greeting"&&(
                <span className="text-blue-800">&nbsp;{user}</span>
            )}
        </h1>
        <p className=" text-14 lg:text-16 font-normal text-gray-60">{subtext}</p>
    </div>
  )
}

export default HeaderBox