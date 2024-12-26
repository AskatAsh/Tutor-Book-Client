import useGetStats from "../hooks/useGetStats";

const Stats = () => {
  const [stats, isLoading] = useGetStats();

  return (
    <section className="max-w-7xl w-11/12 mx-auto rounded-lg flex justify-center gap-5 flex-wrap my-10">
      {/* tutors count */}
      <div className="bg-white dark:bg-gray-800 text-center p-5 rounded-lg flex-1 border dark:border-gray-700">
        <strong className="text-3xl font-bold text-gray-700 dark:text-gray-300 pb-2 inline-block">
          {isLoading ? (
            <span className="loading loading-bars loading-md text-green-700 dark:text-green-600"></span>
          ) : (
            <>{stats?.totalTutorials}+</>
          )}
        </strong>
        <p className="text-gray-600 dark:text-gray-400">Extensive Tutorials</p>
      </div>
      {/* tutors count */}
      <div className="bg-white dark:bg-gray-800 text-center p-5 rounded-lg flex-1 border dark:border-gray-700">
        <strong className="text-3xl font-bold text-gray-700 dark:text-gray-300 pb-2 inline-block">
          {isLoading ? (
            <span className="loading loading-bars loading-md text-green-700 dark:text-green-600"></span>
          ) : (
            <>{stats?.totalReviews}+</>
          )}
        </strong>
        <p className="text-gray-600 dark:text-gray-400">
          Total Student Reviews
        </p>
      </div>
      {/* tutors count */}
      <div className="bg-white dark:bg-gray-800 text-center p-5 rounded-lg flex-1 border dark:border-gray-700">
        <strong className="text-3xl font-bold text-gray-700 dark:text-gray-300 pb-2 inline-block">
          {isLoading ? (
            <span className="loading loading-bars loading-md text-green-700 dark:text-green-600"></span>
          ) : (
            <>{stats?.numberOfLanguages}+</>
          )}
        </strong>
        <p className="text-gray-600 dark:text-gray-400">Lanuages Taught</p>
      </div>
      {/* tutors count */}
      <div className="bg-white dark:bg-gray-800 text-center p-5 rounded-lg flex-1 border dark:border-gray-700">
        <strong className="text-3xl font-bold text-gray-700 dark:text-gray-300 pb-2 inline-block">
          {isLoading ? (
            <span className="loading loading-bars loading-md text-green-700 dark:text-green-600"></span>
          ) : (
            <>{stats?.totalUsers}+</>
          )}
        </strong>
        <p className="text-gray-600 dark:text-gray-400">Total Active Users</p>
      </div>
      {/* tutors count */}
      <div className="bg-white dark:bg-gray-800 text-center p-5 rounded-lg flex-1 border dark:border-gray-700">
        <strong className="text-3xl font-bold text-gray-700 dark:text-gray-300 pb-2 inline-block">
          4.8+
        </strong>
        <p className="text-gray-600 dark:text-gray-400">On App Store</p>
      </div>
    </section>
  );
};

export default Stats;
