import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//import Tarkeeb from "./Tarkeeb";
// import QuestionCard from "./QuestionCard";

export default function Home() {
  const [screen, setScreen] = useState(0);

  function handleClick(e) {
    const selectScreen = e.target.id === "tarkeeb" ? 1 : -1;
    setScreen(selectScreen);
    e.target.parentElement.classList.add("hidden");
  }

  return (
    <>
      <main className="grid grid-cols-1 gap-8 px-16 lg:grid-cols-2 lg:px-36 xl:px-64">
        <section className="">
          <div>
            <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Master Arabic with Nahw and Sarf
            </h1>
            <p className="mb-4 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              Engage, Learn and Enhance your Arabic vocabulary, grammar (Nahw)
              and morphology (Sarf) skills with our interactive platform.
            </p>
            <button className="h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90">
              Get Started
            </button>
          </div>
        </section>
        <section className="">
          <img
            className="mx-auto aspect-video h-full w-full overflow-hidden rounded-xl bg-gray-200 object-cover sm:w-full lg:order-last"
            src=""
            alt="Blank"
          />
        </section>

        <section className="mt-4 lg:col-span-2 lg:mt-16">
          <Tabs
            className=""
            selectedTabClassName="bg-white text-black outline-none px-1 rounded-md"
            selectedTabPanelClassName=""
          >
            <TabList className="mb-4 grid w-full grid-cols-3 rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-400">
              <Tab className="home-tab-button" value="vocabulary">
                Vocabulary
              </Tab>
              <Tab className="home-tab-button" value="nahw">
                Nahw
              </Tab>
              <Tab className="home-tab-button" value="sarf">
                Sarf
              </Tab>
            </TabList>
            {/* Vocab Panel */}
            <TabPanel className="home-tab-panel">
              <Card className="px-4 py-4">
                {/* First Card */}
                <div className="col-span-2">
                  <h1 className="text-xl font-semibold">Vocabulary Learning</h1>
                  <p className="text-sm text-gray-400">
                    Enhance your vocabulary with interactive flashcards.
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent>
                      <div className="flex items-center justify-center">
                        <img
                          alt="Word"
                          className="h-20 w-20 rounded-full"
                          height="100"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "100/100",
                            objectFit: "cover",
                          }}
                          width="100"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <h3 className="text-xl font-medium">Word</h3>
                        <p className="text-gray-500">Translation</p>
                      </div>
                    </CardContent>
                  </Card>
                  {/* Second Card */}
                  <Card>
                    <CardContent>
                      <div className="flex items-center justify-center">
                        <img
                          alt="Word"
                          className="h-20 w-20 rounded-full"
                          height="100"
                          src="/placeholder.svg"
                          style={{
                            aspectRatio: "100/100",
                            objectFit: "cover",
                          }}
                          width="100"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <h3 className="text-xl font-medium">Word</h3>
                        <p className="text-gray-500">Translation</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Card>
            </TabPanel>
            {/* Nahw Panel */}
            <TabPanel className="home-tab-panel">
              <Card className="px-4 py-4">
                <div className="col-span-2 mb-4">
                  <h1 className="text-xl font-semibold">
                    Grammar Analysis - Nahw
                  </h1>
                  <p className="text-sm text-gray-400">
                    An interactive game to analyse sentence structures.
                  </p>
                </div>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Card>
            </TabPanel>
            {/* Sarf Panel */}
            <TabPanel className="home-tab-panel">
              <Card className="px-4 py-4">
                <div className="col-span-2">
                  <h1 className="text-xl font-semibold">
                    Question-and-Answer Practice - Sarf
                  </h1>
                  <p className="text-sm text-gray-400">
                    Practice traditional question-and-answer exercises for Sarf.
                  </p>
                </div>

                <CardHeader>
                  <h1>Question-and-Answer Practice - Sarf</h1>
                  <p>
                    Practice traditional question-and-answer exercises for Sarf.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>Question: Translate "He Opened" into Arabic</p>
                    <input
                      className="mb-4 w-full"
                      placeholder="Answer"
                      id="sarf-prac-demo"
                    />
                    <Button
                      onClick={() => {
                        const answerCheck =
                          document.getElementById("sarf-prac-demo").value ===
                          "فتح"
                            ? "Correct"
                            : "Incorrect";
                        alert(answerCheck);
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabPanel>
          </Tabs>
        </section>
      </main>
      <footer className="mt-8 flex w-full justify-between border-t-2 p-4 text-sm lg:mt-32">
        <p className="text-gray-500">© Nahw and Sarf. All rights reserved.</p>
        <nav className="flex w-2/6 justify-around text-gray-600">
          <a
            className="text-sm font-medium underline-offset-4 hover:underline"
            href=""
          >
            About
          </a>
          <a
            className="text-sm font-medium underline-offset-4 hover:underline"
            href=""
          >
            Contact
          </a>
          <a
            className="text-sm font-medium underline-offset-4 hover:underline"
            href=""
          >
            Terms of Service
          </a>
        </nav>
      </footer>
    </>
  );
}
