import useFetch from '../components/useFetch';
function Covid() {
    const { data, isLoading, isError } = useFetch('https://api.covid19api.com/live/country/vietnam');
    return (
        <>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !isLoading && data && data.length > 0 &&
                        data.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                    <td>{item.Active}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        isLoading &&
                        <tr>
                            <td colSpan={"5"}>
                                <span>Loading...</span>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default Covid;