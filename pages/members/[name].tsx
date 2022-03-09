import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import prisma from "../../lib/prisma";
import { withBasePath } from "../../lib/helper";

interface IParams extends ParsedUrlQuery {
  name: string;
}
const Detail: NextPage = ({ feed }: any) => {
  return (
    <div className="mx-5 mt-5 lg:mt-20 max-w-content lg:mx-64">
      <div className="grid overflow-hidden shadow bg-gray-50 sm:rounded-lg">
        <section className="overflow-hidden text-gray-600 body-font">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap mx-auto lg:w-4/5">
              <img
                alt={feed.name}
                className="h-auto max-w-full align-middle border-none rounded shadow-lg lg:w-3/2 lg:h-4/6"
                src={withBasePath(`images/${feed.image}`)}
              />
              <div className="w-full mb-6 lg:w-1/2 lg:pr-10 lg:mb-0 lg:pl-4">
                <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
                  {feed.name} &nbsp; ({feed.age})
                </h3>
                <p className="max-w-2xl mt-1 text-sm text-justify text-gray-500">
                  Japanese: &nbsp;{feed.name_jp}
                </p>
                <br />
                <p className="mb-4 leading-relaxed">{feed.summary}</p>
                <div className="flex mb-4">
                  <div className="flex-grow px-1 py-2 text-md">
                    Role:{" "}
                    <b className="font-bold tracking-tight text-gray-800">
                      {feed.position}
                    </b>
                  </div>
                  <div className="flex-grow px-1 py-2 text-md">
                    Origin:{" "}
                    <b className="font-bold tracking-tight text-gray-800">
                      {feed.origin}
                    </b>
                  </div>
                  <div className="flex-grow px-1 py-2 text-md">
                    Devil Fruit:{" "}
                    <b className="font-bold tracking-tight text-gray-800">
                      {feed.devilfruit}
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params as IParams;
  const result = await prisma.member.findUnique({
    where: {
      name: name.replace(/_/g, " "),
    },
  });

  return {
    props: {
      feed: result,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const feed = await prisma.member.findMany({
    select: {
      name: true,
    },
  });

  return {
    paths: feed.map((member) => ({
      params: { name: member.name.replace(/\s/g, "_") },
    })),
    fallback: false,
  };
};

export default Detail;
