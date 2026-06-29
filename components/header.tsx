export function Header(){
    return(
        <div className=" w-full h-[100px] flex items-center  manrope text-[22px] font-semibold ">
            <div className=" bg-neutral-50 flex items-center w-full justify-between  lg:mx-[200px]  px-[10px] h-[55px] rounded-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  ">
                {/* Left */}
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                    <div>
                        <svg width="30" height="30" viewBox="0 0 513 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M381.828 89.9023L381.623 160.955L381.289 160.996C377.207 161.424 355.364 161.649 315.76 161.671L309.237 161.673L288.5 161.651L278.09 161.655C242.207 161.699 236.291 162.072 232.648 163.313C218.988 167.867 211.719 174.317 206.308 186.803L205.978 187.57C204.14 191.911 204.032 197.437 203.529 271.892L202.647 422.098H132.927L132.989 274.455L132.948 262.124C132.937 257.664 132.93 253.39 132.927 249.306L132.933 238.423C132.979 209.81 133.284 192.613 133.809 188.638C140.61 136.465 178.06 98.0589 229.147 90.8296L230.7 90.62C232.443 90.415 267.098 90.1074 307.802 90.0049L381.828 89.9023ZM380.353 200.224C381.5 202.48 382.073 209.588 382.073 221.55L382.069 223.416C381.936 252.696 378.61 269.373 369.252 288.015L368.955 288.604C358.201 309.828 342.932 325.105 320.458 336.896C305.476 344.756 280.901 349.917 246.734 352.378V283.683C259.638 283.683 271.108 281.291 281.144 276.506C296.198 269.329 305.942 256.615 307.555 243.799L308.2 237.545L247.122 238.057L246.8 200.429L380.353 200.224Z" fill="black"></path>
                        </svg>
                    </div>
                    <div >
                        Pie Motion
                    </div>
                </div>

                {/* Right */}

                <div className="flex items-center gap-3">
                    <span className="cursor-pointer flex items-center justify-center size-9 rounded-md hover:bg-neutral-200 transition duration:1.5"  ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg></span>
                    <span className="cursor-pointer flex items-center justify-center size-9 rounded-md hover:bg-neutral-200 transition duration:1.5" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4l11.733 16h4.267l-11.733 -16l-4.267 0" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg></span>
                </div>
            </div>

        </div>
    );
}