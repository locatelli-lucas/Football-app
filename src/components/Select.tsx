interface Props {
    options: string[]
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function Select({ options, onChange }: Props) {
    return (
        <select name="season" onChange={onChange}>
            {options.map((option) => (
                <option value={option} key={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}