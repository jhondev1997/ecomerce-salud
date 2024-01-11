interface PropsInputError {
  messages?: never[] | undefined;
  className?: string | undefined
}

const InputErrors = ({ messages = [], className = '' }: PropsInputError) => (
  <>
    {messages.length > 0 && (
      <>
        {messages.map((message, index) => (
          <p
            className={`${className} text-sm text-red-600`}
            key={index}>
            {message}
          </p>
        ))}
      </>
    )}
  </>
)

export default InputErrors
