const Tables = () => {
  return (
    <>
      <section className="flex flex-col mt-20">
        <div className=" flex flex-col items-center justify-center font-sans overflow-hidden">
          <div className="w-full lg:w-5/6 ">
            <div className="overflow-x-auto">
              <table className="min-w-max w-full ">
                <thead>
                  <tr className="bg-gray-100 text-gray-400  text-md ">
                    <th className="py-3 px-6 text-left">Usage</th>
                    <th className="py-3  text-left">Starter</th>
                    <th className="py-3  text-left"> Growth</th>
                    <th className="py-3  text-left">Midsize</th>
                    <th className="py-3  text-left">Large</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm font-bold">
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      Pages and Blocks
                    </td>
                    <td className="py-3  text-left">Unlimited</td>
                    <td className="py-3  text-left">Unlimited</td>
                    <td className="py-3  text-left">Unlimited</td>
                    <td className="py-3  text-left">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      Members
                    </td>
                    <td className="py-3  text-left">Just you</td>
                    <td className="py-3  text-left">Just you</td>
                    <td className="py-3  text-left">Unlimited</td>
                    <td className="py-3  text-left">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      Guests
                    </td>
                    <td className="py-3  text-left">5 Person</td>
                    <td className="py-3  text-left">Unlimited</td>
                    <td className="py-3  text-left">Unlimited</td>
                    <td className="py-3  text-left">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      Row 3 Data 1
                    </td>
                    <td className="py-3  text-left">Row 3 Data 2</td>
                    <td className="py-3  text-left">Row 3 Data 3</td>
                    <td className="py-3  text-left">Row 3 Data 4</td>
                    <td className="py-3  text-left">Row 3 Data 5</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      Row 3 Data 1
                    </td>
                    <td className="py-3  text-left">Row 3 Data 2</td>
                    <td className="py-3  text-left">Row 3 Data 3</td>
                    <td className="py-3  text-left">Row 3 Data 4</td>
                    <td className="py-3  text-left">Row 3 Data 5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Tables;
