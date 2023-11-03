function Footer() {
  const now = new Date()

  return (
    <footer>
      <span>&copy; Copyright {now.getFullYear()}. All right reserved.</span>
    </footer>
  )
}

export default Footer
