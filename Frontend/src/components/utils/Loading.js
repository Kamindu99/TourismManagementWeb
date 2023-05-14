import { GridLoader,PacmanLoader,RingLoader} from 'react-spinners'

export function Loading() {
    return (
        <>
            <div style={{ margin: "10%" }}>
                <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                    <RingLoader color="blue"  size={100} />
                </div>
            </div>
        </>
    )
}

export function LoadingButton() {
    return (
        <>
            <div style={{ marginBottom: "15%", marginTop: "2%" }}>
                <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                    <GridLoader color="#953002" size={10} />
                </div>
            </div>
        </>
    )
}