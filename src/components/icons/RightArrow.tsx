const RightArrow = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props?.fill ? props.fill : "#fff"}
        d="M16.315 16.668a1 1 0 1 0 1.415 1.414l4.665-4.665a2 2 0 0 0 0-2.829L17.727 5.92a1 1 0 1 0-1.415 1.414L19.978 11H2a1 1 0 1 0 0 2h17.983l-3.668 3.668Z"
      />
    </svg>

  )
}

export default RightArrow;

