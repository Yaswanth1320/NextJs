"use client"
import { generateKitToken } from "@/utils/zego";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export default function page({ params }: { params: { id: string } }) {
    const token = generateKitToken(params.id);
    const zp = ZegoUIKitPrebuilt.create(token);
    const joinMeeting = (element: HTMLDivElement) =>{
        zp.joinRoom({
          container: element,
          scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
          },
          sharedLinks: [
            {
              name: "Zoom-lite Mettings",
              url:
                window.location.protocol +
                "//" +
                window.location.host +
                window.location.pathname,
            },
          ],
        });
    }
  return <div ref={joinMeeting}>ID: {params.id}</div>;
}
