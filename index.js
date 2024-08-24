const Notification = props => {
  //  Write your code here.
  const {className, image, msg} = props
  return (
    <div className={className}>
      <img src={image} className='logo' />
      <p> {msg} </p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <div className='content-container'>
      <h1 className='title'>Notifications </h1>
      <div class='notification-msg-container'>
        <Notification
          className='information-bg-container'
          image='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
          msg='Information Message'
        />
        <Notification
          className='success-bg-container'
          image='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
          msg='Success Message'
        />
        <Notification
          className='warning-bg-container'
          image='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
          msg='Warning Message'
        />
        <Notification
          className='error-bg-container'
          image='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
          msg='Error Message'
        />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
