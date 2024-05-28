import { getLeagueSeasons, getLeagueStandings } from "../services/leagues.service";
import { Header } from "../components/Header";
import { Standings, Table } from "../components/Table";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Select } from "../components/Select";
import { useLoading } from "../context/LoadingContext";
import { Spinner } from "../components/Spinner";

interface League {
    name: string;
    seasonDisplay: string;
    standings: Standings[];
}

interface Season {
    year: number;
}

export function LeagueStandings() {
    const [league, setLeague] = useState<League>()
    const [seasons, setSeasons] = useState<string[]>([])
    const [selectedSeason, setSelectedSeason] = useState<string>("")

    const {isLoading, setLoadingState} = useLoading();

    const {leagueId} = useParams();

    const getStandingsByLeague = async () => {
        setLoadingState(true);
        const response = leagueId && await getLeagueStandings(leagueId, parseInt(selectedSeason), 'asc');
        setLeague(response.data);
        setLoadingState(false);
    }

    const getSeasonsByLeague = async () => {
        setLoadingState(true);
        const response = leagueId && (await getLeagueSeasons(leagueId));
        setSeasons(response.data.seasons.map((item: Season) => item.year))
        setLoadingState(false);
    }

    const handleChangeSelectedSeason = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault()
        setSelectedSeason(event.currentTarget.value)
    }

    useEffect(() => {
        if(selectedSeason?.length) getStandingsByLeague()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedSeason])

    useEffect(() => {
        if(!selectedSeason?.length) setSelectedSeason(seasons[0]);
    }, [seasons, selectedSeason])

    useEffect(() => {
        getSeasonsByLeague()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [leagueId])

    return (
        <main className="max-sm:px-4 py-14 px-40">
            <Header />
            <a className="cursor-pointer hover:underline" href="/">
                ⭠ Back
            </a>
            <section className="w-full mt-3">
                <div className="flex justify-between">
                    <h3 className="font-light text-xl">
                        {league?.name} - {league?.seasonDisplay}
                    </h3>
                    <Select options={seasons} onChange={handleChangeSelectedSeason}/>
                </div>
                <hr className="mt-4"/>
                {isLoading? (
                    <div className="my-10 flex justify-center items-center">
                        <Spinner />
                    </div>
                ) : league && <Table standings={league?.standings}/>}
            </section>
        </main>
    )
}