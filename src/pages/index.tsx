import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta
          name="description"
          content="The Women’s Development Centre (WDC)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#009FFD] to-[#2A2A72]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Women’s <span className="text-[hsl(280,57%,36%)]">Development</span>{" "}
            Centre
          </h1>
          <h3 className="text-3xl font-extrabold tracking-tight text-[hsl(210,1%,27%)] sm:text-[3rem]">
            Web-Site is under development
          </h3>
          <div className="container m-3 flex w-full flex-col items-center justify-center p-4 ">
            <div className="m-4 flex min-w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <h3 className="text-2xl font-bold">Who we are →</h3>
              <div className="text-lg">
                The Women’s Development Centre (WDC) is a registered non-profit,
                Non-Governmental Organization (NGO), based in Kandy and in
                existence since 1986. As a women’s organization it has
                implemented supportive programs focusing on women, children and
                youth with and without disabilities, implementing activities
                focusing on needs, in a rights-based approach, among its
                selected communities. The WDC delivers the rights holders’ needs
                in a three-pronged approach of Prevention, intervention and
                advocacy.
              </div>
            </div>
            <div className="m-4 flex min-w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <h3 className="text-2xl font-bold">Our Goal →</h3>
              <div className="text-lg">
                WDC’s mission and overall goal is to support and equip women-led
                community pressure groups with knowledge, resources and skills
                to challenge social injustices affecting women and children
              </div>
            </div>
            <div className="m-4 flex min-w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <h3 className="text-2xl font-bold">Contact Us →</h3>
              <div className="text-lg">Women’s development centre 61</div>
              <div className="text-lg">Mulgampola Road, Kandy</div>
              <div className="text-md">
                Sri Lanka Telephone: 94-081-2234511,94-081-4940872/5 Fax:
                94-081-2234511
              </div>
              <div className="text-md">E-mail: wdc@slt.lk</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
