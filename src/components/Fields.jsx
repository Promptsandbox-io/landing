import clsx from 'clsx'

const formClasses =
  'block w-full appearance-none rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-slate-500 focus:bg-white focus:outline-none focus:ring-slate-500 sm:text-sm'

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="mb-3 block text-sm font-medium text-slate-700"
    >
      {children}
    </label>
  )
}

export function TextField({
  id,
  label,
  type = 'text',
  className = '',
  ...props
}) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

export function SelectField({ id, label, className = '', ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}
