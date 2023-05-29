import Image from "next/image"

export default function ResponseComment(){
    return (
        <div className="flex flex-col rounded-lg gap-3 w-4/5 p-4 bg-zinc-200 shadow-md">
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et semper sem. Nulla quis felis et arcu rhoncus sollicitudin. Vivamus sem quam, tempus efficitur nisi eu, egestas ullamcorper ligula. Sed et sollicitudin est. Aliquam hendrerit massa sagittis diam cursus, eu dapibus magna ornare. Pellentesque ac leo eleifend, rutrum erat in, mollis massa. Donec pharetra interdum lacus, at consectetur sem. Nullam a tortor odio. Ut ultrices, diam quis tincidunt fermentum, ipsum ante aliquet metus, mollis auctor lacus lorem non est. Quisque sollicitudin facilisis bibendum. In vel magna varius, elementum dolor sed, porttitor libero. Quisque iaculis congue libero, sed sollicitudin quam hendrerit id. Nulla auctor malesuada purus, nec pharetra lacus posuere et. Etiam at mi sit amet est sollicitudin placerat vitae non mi. Nulla convallis faucibus orci, id posuere odio sollicitudin vel.
                </p>
            </div>
            <div className="flex flex-row justify-end">
                <div className="flex flex-row">
                    <div className="h-10 w-10 relative mr-4">
                        <Image
                            src="https://staticg.sportskeeda.com/editor/2023/02/ad47e-16765790074089-1920.jpg"
                            fill
                            alt="Foto do autor"
                            className="rounded-full"
                        />
                    </div>
                    <span className="text-sm">
                        Postado por
                        <p className="font-semibold text-blue-500">
                            Heron Rodrigues
                        </p>
                    </span>
                </div>
            </div>
        </div>
    )
}