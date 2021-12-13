import React from "react";
import cn from "classnames";

function Box(props) {
  return (
    <div>
      <section className={cn("pt-12")}>
        <div className={cn("grid grid-cols-4")}>
          <div className={cn("col-span-3")}>
            <div className={cn("border-2 border-black p-4")}>
              <div className={cn("flex")}>
                <div className={cn("flex-shrink-0")}>
                  <img
                    className={cn("h-auto w-auto")}
                    src={props.image_url}
                    alt=''
                  />
                </div>
                <div className={cn("flex-shrink-0")}>
                  <div>{props.title}</div>
                  <div className={cn("pt-28")}>{props.description}</div>
                </div>
                <div className={cn("flex-shrink-0")}>
                  <div>{props.price}</div>
                </div>
              </div>
            </div>
          </div>
          <button className={cn("border-2 border-black")}>3D</button>
        </div>
      </section>
    </div>
  );
}

export default Box;
