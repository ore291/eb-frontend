import Link from "next/link";
import { nairaFormatter } from "../../utils/utils";
import Image from "next/image";
import { VscBriefcase } from "react-icons/vsc";
import { AiOutlineCloudUpload, AiOutlineCarryOut } from "react-icons/ai";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Table } from "flowbite-react";

const ActiveJobs = ({ data }) => {
  console.log(data);
  return (
    <Table hoverable={true}>
      <Table.Head>
        <Table.HeadCell>Id</Table.HeadCell>
        <Table.HeadCell>Company name</Table.HeadCell>
        <Table.HeadCell>Description</Table.HeadCell>
        <Table.HeadCell>Time remaining</Table.HeadCell>
        <Table.HeadCell>Price per blurb</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Upload</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {data?.map((value, index) => (
          <Table.Row key={index} className="bg-white whitespace-nowrap first-letter:capitalize dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {value.id}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {value.client}
            </Table.Cell>
            <Table.Cell>{value.description.substring(0, 24)}...</Table.Cell>
            <Table.Cell>{value.time}</Table.Cell>
            <Table.Cell>{value.price}</Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-baseOrng hover:underline dark:text-baseOrng"
              >
                Upload
              </a>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

function BlurberDashboard() {
  const jobs = [
    {
      cover: "https://placedog.net/400",
      client: "israel padonu",
      status: "active",
      price: 12,
      time: new Date().toLocaleDateString(),
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem ggggg ",
    },
    {
      cover: "https://placedog.net/400",
      client: "israel padonu",
      status: "active",
      price: 12,
      time: new Date().toISOString(),
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem ggggg ",
    },
    {
      cover: "https://placedog.net/400",
      client: "israel padonu",
      status: "active",
      price: 12,
      time: new Date().toISOString(),
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem ggggg ",
    },
    {
      cover: "https://placedog.net/400",
      client: "israel padonu",
      status: "active",
      price: 12,
      time: new Date().toISOString(),
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem ggggg ",
    },
  ];
  const user = {
    firstName: "israel",
    lastName: "padonu",
    email: "israelpadonu13@gmail.com",
    gender: "male",
    phone: "08057880646",
    ActiveJobs: "340",
  };
  return (
    <div className="m-4 grid gap-y-6">
      {/* div 1 */}
      <section className="w-full flex border-b shadow">

        <div className="w-4/12 flex gap-6">
          <div>
            <Image
              className="mx-auto"
              objectFit="contain"
              src="/images/avatar.svg"
              width="92"
              height="92"
              alt="avatar"
            />
          </div>
          <div className="dark:text-white text-baseGray text-xl text-extarbold capitalize flex flex-col gap-y-1">
            <span> {user.firstName + " " + user.lastName}</span>
            <span className="text-base text-gray-500 mt-">{user.email}</span>
            <span className="text-sm text-black dark:text-white font-black">
              {user.phone}
            </span>
          </div>
        </div>

        <div className="w-8/12 h-full">
          <ul className="grid grid-cols-4 capitalize">
            <li className="flex  items- justify-start text gap-x-2 mt-3">
              <div className="text-xl capitalize text-slate-500 font-semibold dark:text-white">
                <VscBriefcase size={60} />
              </div>
              <div className="text-xl font-semibold dark:text-white flex flex-col">
                <span> {user.ActiveJobs}</span>
                <span className="text-base text-textGray dark:text-white">
                  active jobs
                </span>
              </div>
            </li>
            <li className="flex  items- justify-start text gap-x-2 mt-3">
              <div className="text-xl capitalize text-slate-500 font-semibold dark:text-white">
                <AiOutlineCarryOut size={60} />
              </div>
              <div className="text-xl font-semibold dark:text-white flex flex-col">
                <span> {user.ActiveJobs}</span>
                <span className="text-base text-textGray dark:text-white">
                  submitted jobs
                </span>
              </div>
            </li>
            <li className="flex  items- justify-start text gap-x-2 mt-3">
              <div className="text-xl capitalize text-slate-500 font-semibold  dark:text-white">
                <IoIosCheckmarkCircleOutline size={60} />
              </div>
              <div className="text-xl font-semibold dark:text-white flex flex-col">
                <span> {user.ActiveJobs}</span>
                <span className="text-base text-textGray dark:text-white">
                  approved jobs
                </span>
              </div>
            </li>
            <li className="flex  items- justify-start text gap-x-2 mt-3">
              <div className="text-xl capitalize text-slate-500 font-semibold dark:text-white">
                <AiOutlineCloudUpload size={60} />
              </div>
              <div className="text-xl font-semibold dark:text-white flex flex-col">
                <span> {user.ActiveJobs}</span>
                <span className="text-base text-textGray dark:text-white">
                  Uploads
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* div 2*/}
      <section>
        <h1 className="text-4xl text-baseOrng dark:text-baseOrng/90 text-center">Active Jobs</h1>
        <ActiveJobs data={jobs} />
      </section>
    </div>
  );
}

export default BlurberDashboard;
