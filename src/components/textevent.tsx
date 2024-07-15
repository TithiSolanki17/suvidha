import { FadeText } from "../components/ui/FadeText";

export async function FadeTextDemo() {
  return (
    <div className="flex flex-col space-y-8 text-center">
      <FadeText
        className="text-wrap text-black dark:text-white"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.8 } },
        }}
        text="Discover the excitement and opportunities at our upcoming events! Join us for a series of engaging and inspiring gatherings, where you can connect with like-minded individuals, learn from industry leaders, and experience unforgettable moments. Whether you're looking to expand your network, gain new insights, or simply have fun, our events have something for everyone. Don't miss out on the chance to be part of these extraordinary experiences. See you there!"
      />
    </div>
  );
}
