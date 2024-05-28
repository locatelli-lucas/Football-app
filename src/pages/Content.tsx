import { useEffect, useState } from "react";
import { getLeagues } from "../services/leagues.service";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { useLoading } from "../context/LoadingContext";
import { Spinner } from "../components/Spinner";

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

    const {isLoading, setLoadingState} = useLoading()

    const getLeaguesList = async () => {
        setLoadingState(true);
        const response = await getLeagues();
        setLeagues(response.data);
        setLoadingState(false);
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

                {isLoading? (
                    <div className="my-10 flex justify-center items-start">
                        <Spinner />
                    </div>
                ) : (
                    <div className="grid max-sm:grid-cols-3 grid-cols-5 gap-4">
                        {leagues.map(({id, name, logos}) => (
                            <Card key={id} id={id} imageSrc={logos.light} title={name} />
                        ))}
                    </div>
                )}

                
            </section>
        </main>
    )
}