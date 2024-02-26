import "../modal/modal.css"
export const Modal = ({show,setShow}) => {
 const closeModal =()=>{
  setShow(false)
 }

  return (
    <>
    <div>
    <button onClick={closeModal} className={show == false ? "hidden": "openModal"} >close</button>
    </div>
    </>
  )
}
