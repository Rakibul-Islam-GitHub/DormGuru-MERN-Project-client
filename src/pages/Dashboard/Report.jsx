


const Report = () => {
   

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Report</h1>
                
            </div>

            <div className="card flex flex-row space-x-10">
                <div className="single-card bg-amber-200 p-10 w-1/3 space-y-5 text-center">

                <h1 className="text-black">Total Dorm</h1>
                <p className="text-3xl">32</p>

                </div>
                <div className="single-card bg-amber-200 p-10 w-1/3 space-y-5 text-center">

                <h1 className="text-black">Total Review</h1>
                <p className="text-3xl">82</p>

                </div>
                <div className="single-card w-1/3 p-10 bg-amber-200 space-y-5 text-center">

                <h1 className="text-black">Total Rent</h1>
                <p className="text-3xl">20</p>

                </div>

            </div>



          


        </div>
    );
};

export default Report;
