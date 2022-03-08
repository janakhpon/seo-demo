import type { NextPage } from "next";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import prisma from "../lib/prisma";

const Home: NextPage = ({ feed }: any) => {
  return (
    <div className="mx-5 mt-5 lg:mt-24 max-w-content lg:mx-64">
      <div className="grid overflow-hidden shadow bg-gray-50 sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Strawhat Pirates
          </h3>
          <p className="max-w-2xl mt-1 text-sm text-gray-500">
            List of Strawhat pirate members
          </p>
        </div>
        <div className="grid grid-cols-1 m-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
          {feed.map((member: any) => (
            <div key={member.name} className="relative p-2 group">
              <div className="w-full overflow-hidden bg-gray-300 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <Link href={`/members/${member.name.replace(/\s/g, "_")}`}>
                  <a>
                    <img
                      src={`images/${member.image}`}
                      alt={member.name}
                      className="object-cover object-center w-full h-full cursor-pointer lg:w-full lg:h-full"
                    />
                  </a>
                </Link>
              </div>
              <div className="flex p-2">
                <p className="font-bold tracking-tight text-gray-700 text-md">
                  {member.name}&nbsp;({member.position})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.member.findMany({
    skip: 0,
    take: 12,
    orderBy: { name: "asc" },
    select: {
      name: true,
      image: true,
      position: true,
    },
  });

  return {
    props: {
      feed,
    },
  };
};

export default Home;
