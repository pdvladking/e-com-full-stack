"use client";

export default function SidebarFilter() {
  return (
    <aside className="w-64 p-4 border-r border-gray-200">
      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Categories</h3>
        <ul className="space-y-1">
          <li><input type="checkbox" /> Electronics</li>
          <li><input type="checkbox" /> Clothing</li>
          <li><input type="checkbox" /> Books</li>
          <li><input type="checkbox" /> Home & Kitchen</li>
        </ul>
      </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Price Range</h3>
              <div className="flex space-x-2">
                <input type="number" placeholder="Min" className="w-20 border p-1" />
                <input type="number" placeholder="Max" className="w-20 border p-1" />
              </div>
            </div>

                  {/* Ratings */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Ratings</h3>
                    <ul className="space-y-1">
                      <li><input type="checkbox" /> ★ 4 & up</li>
                      <li><input type="checkbox" /> ★ 3 & up</li>
                      <li><input type="checkbox" /> ★ 2 & up</li>
                    </ul>
                  </div>

                  {/* Brands */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Brands</h3>
                    <ul className="space-y-1">
                      <li><input type="checkbox" /> Nike</li>
                      <li><input type="checkbox" /> Apple</li>
                      <li><input type="checkbox" /> Samsung</li>
                      <li><input type="checkbox" /> Sony</li>
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded">Apply</button>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded">Reset</button>
                  </div>
    </aside>
  );
}