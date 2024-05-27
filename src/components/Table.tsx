interface Team {
    name: string;
    displayName: string;
    logos: {
        href: string
    }[]
}

interface Stat {
    displayValue: string; 
}

export interface Standings {
    team: Team;
    stats: Stat[]
}

interface Props {
    standings: Standings[]
}

export function Table({standings}: Props) {
    const renderTableRows = ()=> {
        return standings.map((item, index) => (
            <tr key={item.team.name} className="border-b border-neutral-300 text-left font-light">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="flex item-center gap-2 px-6 py-4">
                    {item.team.logos && (
                        <img className="w-7 h-7" src={item.team.logos[0].href} alt={item.team.name} />
                    )}
                    {item?.team.displayName}
                </td>
                {
                    item.stats && (
                        <>
                            <td className="px-6 py-4 text-center">
                                {item.stats[3].displayValue}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {item.stats[0].displayValue}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {item.stats[7].displayValue}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {item.stats[1].displayValue}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {item.stats[6].displayValue}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {item.stats[2].displayValue}
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrwap">
                                {item.stats[12].displayValue}
                            </td>
                        </>
                    )
                }
            </tr>
        ))
    }

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <table className="min-w-full table-fixed text-left font-light">
                    <thead className="border-b border-neutral-400 font-medium text-left">
                        <tr>
                            <th scope="col" className="max-sm:sticky px-6 whitespace-nowrap py-4 w-3">
                                Pos
                            </th>
                            <th scope="col" className="max-sm:sticky px-6 whitespace-nowrap py-4 w-3">
                                Team
                            </th>
                            <th scope="col" className="max-sm:sticky px-6 whitespace-nowrap py-4 w-3 text-center">
                                Points
                            </th>
                            <th scope="col" className="max-sm:sticky px-6 whitespace-nowrap py-4 w-3 text-center">
                                Games
                            </th>
                            <th scope="col" className="max-sm:sticky px-6 whitespace-nowrap py-4 w-3 text-center">
                                W
                            </th>
                            <th scope="col" className="max-sm:sticky px-6 whitespace-nowrap py-4 w-3 text-center">
                                L
                            </th>
                            <th scope="col" className="max-sm:sticky px-6 whitespace-nowrap py-4 w-3 text-center">
                                Pos
                            </th>
                            <th scope="col" className="max-sm:sticky px-6 whitespace-nowrap py-4 w-3 text-center">
                                D
                            </th>
                            <th scope="col" className="max-sm:sticky px-6 whitespace-nowrap py-4 w-3 text-center">
                                GD
                            </th>
                            <th scope="col" className="max-sm:sticky px-6 whitespace-nowrap py-4 w-3 text-center">
                                Record
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableRows()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}