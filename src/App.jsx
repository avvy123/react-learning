import User from "./components/user";
function App() {
    return (
        <div>
            <h1>
                Users 
                <User name="Saurabh" description="FSWD" />
                {/* <User name="Nitya" description="FSWD" />
                <User name="Priya" description="FSWD" />
                <User name="Manish" description="FSWD" /> */}

            </h1>
        </div>
    );
}
export default App;