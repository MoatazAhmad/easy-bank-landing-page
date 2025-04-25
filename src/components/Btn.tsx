const Btn = ({ Text, classes = "" }: { Text: string, classes?: string }) => {
  return (
    <button
      type="button"
      className={`${classes} cursor-pointer 
         hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300
         duration-200  py-3 px-8
         text-white rounded-[50px] 
         bg-gradient-to-r from-green-400 to-blue-400`}
    >
      {Text}
    </button>
  )
}

export default Btn