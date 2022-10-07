import React from "react";
import { JobsCard } from "../../utils/utils";
import { Dropdown } from "flowbite-react";

function BlurberJobs() {
  const jobs = [
    {
      cover: "https://placedog.net/400",
      client: "israel padonu",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem ",
      status: "available",
      created_at: "",
    },
    {
      cover: "https://placedog.net/500",
      client: "israel padonu",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem",
      status: "available",
      created_at: "",
    },
    {
      cover: "https://placedog.net/500",
      client: "israel padonu",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem",
      status: "available",
      created_at: "",
    },
    {
      cover: "https://placedog.net/500",
      client: "israel padonu",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem",
      status: "available",
      created_at: "",
    },
    {
      cover: "https://placedog.net/500",
      client: "israel padonu",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem",
      status: "accepted",
      created_at: "",
    },
    {
      cover: "https://placedog.net/500",
      client: "israel padonu",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem",
      status: "accepted",
      created_at: "",
    },
    {
      cover: "https://placedog.net/500",
      client: "israel padonu",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem",
      status: "",
      created_at: "",
    },
    {
      cover: "https://placedog.net/500",
      client: "israel padonu",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem",
      status: "",
      created_at: "",
    },
    {
      cover: "https://placedog.net/500",
      client: "israel padonu",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem",
      status: "",
      created_at: "",
    },
    {
      cover: "https://placedog.net/500",
      client: "israel padonu",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem",
      status: "",
      created_at: "",
    },
    {
      cover: "https://placedog.net/500",
      client: "israel padonu",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem",
      status: "",
      created_at: "",
    },
  ];
  return (
    <div>
      <section className="flex justify-between items-center">
        <form
          action=""
          method="get"
          className="pt-2 ml-4 mt-4 relative mx-auto text-gray-600 flex  gap-1 md:justify-start  md:flex-auto"
        >
          {/* search bar */}
          <input
            className="border-2 border-gray-300 text-start bg-white h-10 px-10 pr-16 w-full md:w-6/12 rounded-lg text-sm dark:bg-slate-500 dark:border-gray-600 dark:placeholder:text-white dark:text-white"
            type="search"
            name="search"
            placeholder="Search for jobs"
          />
          {/* search icon */}
          <button
            type="submit"
            className="absolute left-2 opacity-50 top-0 mt-5 mr-4"
          >
            <svg
              className="text-gray-600 dark:text-white h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: "new 0 0 56.966 56.966" }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>

          {/* filter by button */}
          {/* <div className="rotate-90 flex items-center   md:hidden bg-baseOrng rounded-lg  text-white ">
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowFilter((prev) => !prev);
            }}
          >
            <VscSettings className="w-10 mx-auto" size={`32`} />
          </button>
        </div> */}
        </form>

        <div>
          <Dropdown label="Dropdown">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 mt-6">
          {jobs
            .sort((a, b) =>
              new Date(a.created_at) > new Date(b.created_at) ? -1 : 1
            )
            .slice(0, 10)
            .map((job, key) => (
              <JobsCard
                cover={job.cover}
                client={job.client}
                description={job.description}
                key={key}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

export default BlurberJobs;
