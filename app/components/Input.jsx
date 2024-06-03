
const Input = ({ id, value, name, placeholder, style, onChange, type, disabled }) => {
  return (
        <>
            <input type={type}
              id={id}
              value={value}
              name={name}
              className={'p-2 block w-full rounded text-sm border border-outline focus:outline-none focus:ring-0"' + style}
              placeholder={placeholder}
              onChange={onChange}
              disabled={disabled}
              autoComplete="off"
            />
        </>
  )
}

export default Input
