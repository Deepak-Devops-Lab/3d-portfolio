import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

import { useLoading } from "../context/LoadingProvider";
import "./styles/Loading.css";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();

  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  /*
   * Loader completion animation.
   * State updates render ke andar nahi, useEffect ke andar hongi.
   */
  useEffect(() => {
    if (percent < 100) {
      return;
    }

    const loadedTimer = window.setTimeout(() => {
      setLoaded(true);
    }, 600);

    const completeTimer = window.setTimeout(() => {
      setIsLoaded(true);
    }, 1600);

    return () => {
      window.clearTimeout(loadedTimer);
      window.clearTimeout(completeTimer);
    };
  }, [percent]);

  /*
   * Main website animation initialise karo aur loading screen hatao.
   */
  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    let isMounted = true;

    const startWebsite = async () => {
      try {
        const module = await import("./utils/initialFX");

        if (!isMounted) {
          return;
        }

        setClicked(true);

        window.setTimeout(() => {
          try {
            module.initialFX?.();
          } catch (error) {
            console.error("Initial animation failed:", error);
          } finally {
            setIsLoading(false);
          }
        }, 900);
      } catch (error) {
        console.error("Failed to load initialFX:", error);

        /*
         * Animation fail hone par bhi website open honi chahiye.
         */
        setClicked(true);

        window.setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    startWebsite();

    return () => {
      isMounted = false;
    };
  }, [isLoaded, setIsLoading]);

  /*
   * Emergency fallback:
   * Agar kisi model/texture ki loading fail ho jaye,
   * loading screen hamesha ke liye atki nahi rahegi.
   */
  useEffect(() => {
    const fallbackTimer = window.setTimeout(() => {
      setLoaded(true);
      setIsLoaded(true);
    }, 12000);

    return () => {
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const safePercent = Math.min(Math.max(Math.round(percent), 0), 100);

  return (
    <>
      <div className="loading-header">
        <a href="#landingDiv" className="loader-title" data-cursor="disable">
          DK
        </a>

        <div className={`loaderGame ${clicked ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {Array.from({ length: 27 }, (_, index) => (
                <div className="loaderGame-line" key={index} />
              ))}
            </div>

            <div className="loaderGame-ball" />
          </div>
        </div>
      </div>

      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee>
            <span>DevOps Engineer</span>
            <span>AWS • Docker • Jenkins • Terraform</span>
            <span>Linux • Git • Python • CI/CD</span>
            <span>Cloud Infrastructure &amp; Automation</span>

            <span>DevOps Engineer</span>
            <span>AWS • Docker • Jenkins • Terraform</span>
            <span>Linux • Git • Python • CI/CD</span>
            <span>Cloud Infrastructure &amp; Automation</span>
          </Marquee>
        </div>

        <div
          className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
          onMouseMove={handleMouseMove}
        >
          <div className="loading-hover" />

          <div
            className={`loading-button ${
              loaded ? "loading-complete" : ""
            }`}
          >
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{safePercent}%</span>
                </div>
              </div>

              <div className="loading-box" />
            </div>

            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (
  setLoading: (value: number) => void
) => {
  let percent = 0;
  let interval: number | undefined;
  let completed = false;

  const updateProgress = () => {
    if (completed) {
      return;
    }

    if (percent < 55) {
      percent += Math.max(1, Math.round(Math.random() * 5));
    } else if (percent < 90) {
      percent += Math.max(1, Math.round(Math.random() * 2));
    } else if (percent < 99) {
      percent += 1;
    }

    percent = Math.min(percent, 99);
    setLoading(percent);

    /*
     * Asset signal na aaye tab bhi loader eventually complete hoga.
     */
    if (percent >= 99) {
      window.clearInterval(interval);

      window.setTimeout(() => {
        if (!completed) {
          completed = true;
          percent = 100;
          setLoading(100);
        }
      }, 2500);
    }
  };

  interval = window.setInterval(updateProgress, 180);

  const clear = () => {
    completed = true;

    if (interval !== undefined) {
      window.clearInterval(interval);
    }

    percent = 100;
    setLoading(100);
  };

  const loaded = () => {
    return new Promise<number>((resolve) => {
      completed = true;

      if (interval !== undefined) {
        window.clearInterval(interval);
      }

      const finishInterval = window.setInterval(() => {
        if (percent < 100) {
          percent += 1;
          setLoading(percent);
          return;
        }

        window.clearInterval(finishInterval);
        resolve(percent);
      }, 15);
    });
  };

  return {
    loaded,
    percent,
    clear,
  };
};