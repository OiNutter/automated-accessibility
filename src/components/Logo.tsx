type LogoProps = JSX.IntrinsicElements['img']

const Logo = ({className, ...props}: LogoProps) => {
  const klass = `logo ${className}`
  return <img className={klass} {...props} />
}

export default Logo