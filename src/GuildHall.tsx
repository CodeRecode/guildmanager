let hallLevelNames = [
    "a dingy shack",
    "a barn",
    "a small building",
    "a medium building",
    "a large building",
    "a mansion"
]

function GuildHall() {
    let currentHallName = hallLevelNames[0];
    return (<>
        <div className="text-2xl p-6 border border-gray-600 bg-gray-800 rounded-md gap-x-4">
            Your current guildhall is: {currentHallName}
        </div>
    </>)
}

export default GuildHall