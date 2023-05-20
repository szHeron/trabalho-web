import Link from "next/link"
import Header from "@/components/Header"
import QuestCard from "@/components/QuestCard"

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="flex flex-col gap-4 items-center pt-4 pb-4">
        <QuestCard/>
        <QuestCard/>
        <QuestCard/>
      </div>
    </div>
  )
}
