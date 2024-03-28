type StatusProps = {
    status: "loading" | "success" | "failure"
}
const Status = (props: StatusProps) => {
  return (
    <div>
      {props.status}
    </div>
  )
}

export default Status
