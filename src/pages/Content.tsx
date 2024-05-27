import { useEffect, useState } from "react";
import { getLeagues } from "../services/leagues.service";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

interface League {
    id: string,
    name: string,
    logos: {
        light: string,
        dark: string,
    }
}

export function Content() {
    const [leagues, setLeagues] = useState<League[]>([]);

    const getLeaguesList = async () => {
        const response = await getLeagues();
        setLeagues(response.data);
    }

    useEffect(() => {
        getLeaguesList();
    }, [])

    return (
        <main className="max-sm:px-4 py=14 px-48">
            <Header />
            <section className="w-full">
                <h3 className="font-light text-xl">Leagues</h3>
                <hr className="my-4"/>

                <div className="grid max-sm:grid-cols-3 grid-cols-5 gap-4">
                    {leagues.map(({id, name, logos}) => (
                        <Card key={id} id={id} imageSrc={logos.light} title={name} />
                    ))}
                </div>
            </section>
        </main>
    )
}