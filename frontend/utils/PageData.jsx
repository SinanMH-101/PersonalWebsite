export const PageData =
{
  "CleanWalk": `<p><strong>Make Every Step Count</strong></p>
                <p><strong>CleanWalk</strong> is a mobile app that promotes environmental responsibility by letting users easily log and share their personal litter cleanup efforts. Whether on a walk, at the beach, or around the neighborhood, users can capture before/after photos, add a description, and tag a location for each cleanup.</p>
                <p>Designed for eco-conscious individuals, joggers, local volunteers, and educators who want a simple, rewarding way to make a difference. With a focus on usability and motivation, users can view personal stats, track contributions, and showcase their best cleanups on a customizable home screen.</p>

                <p><strong>Key Features:</strong></p>
                <ul>
                  <li><strong>Before & After Photo Logging</strong> – capture both states of each cleanup.</li>
                  <li><strong>Optional Location & Description Tagging</strong> – add context to each entry.</li>
                  <li><strong>Profile Stats & Cleanup History</strong> – track progress over time.</li>
                  <li><strong>Firebase Authentication</strong> – secure login & signup.</li>
                  <li><strong>Cloud Firestore</strong> – persistent storage of cleanup records.</li>
                  <li><strong>Favorite Cleanup Showcase</strong> – highlight a top cleanup on the home screen.</li>
                  <li><strong>Camera Access & Image Upload</strong> – seamless media handling on device.</li>
                </ul>

                <p><strong>Changes from the MVP Proposal:</strong></p>
                <p>The only functional change was omitting the Profile screen. The implemented Login, Home, and Post screens already demonstrated the core objectives and key technologies (Firebase Auth, Firestore, Storage), so the Profile screen was deemed non-essential to the MVP.</p>

                <p><strong>Devices Used for Development & Testing:</strong></p>
                <ul>
                  <li>Google Pixel 6 Pro (Android 15) emulator</li>
                  <li>Medium Phone (Android 15) emulator</li>
                  <li>Chrome Browser</li>
                </ul>

                <p><strong>Technologies Used:</strong></p>
                <ul>
                  <li><strong>Flutter</strong> – front-end UI development</li>
                  <li><strong>Firebase Authentication</strong> – user login & registration</li>
                  <li><strong>Cloud Firestore</strong> – storing cleanup data & user statistics</li>
                  <li><strong>Firebase Storage</strong> – hosting uploaded photos</li>
                  <li><strong>Image Picker</strong> – capturing and selecting images</li>
                  <li><strong>Google Fonts</strong> – custom typography</li>
                  <li><strong>Shared Preferences</strong> – local persistence (e.g., selected favorite cleanup)</li>
                  <li><strong>Mockito</strong> – unit/widget tests (mocking Firebase Auth)</li>
                </ul>`,
  "TCP Chat App": `<p><strong>TCP Chat App</strong> is a small multi-user, terminal-based chat application built to practice core networking concepts. It includes a TCP server that accepts multiple client connections and broadcasts messages in real time using Python sockets and threads.</p>

                   <p><strong>What I Learned:</strong></p>
                   <ul>
                     <li>TCP/IP fundamentals using Python <code>socket</code></li>
                     <li>Separation of server-side vs. client-side responsibilities</li>
                     <li>Managing multiple connections with <code>threading</code></li>
                     <li>Graceful I/O handling in a multi-threaded console app</li>
                     <li>Debugging dropped connections and encoding issues</li>
                     <li>Useful Unix commands for development and testing</li>
                   </ul>

                   <p><strong>Features:</strong></p>
                   <ul>
                     <li>Multiple clients can join the server concurrently</li>
                     <li>Real-time message broadcasting to all connected clients</li>
                     <li>Nickname system for identifying users</li>
                     <li>Clean message formatting and improved input UX</li>
                     <li>Graceful handling of disconnections and common errors</li>
                   </ul>

                   <p><strong>Technologies Used:</strong></p>
                   <ul>
                     <li><strong>Language:</strong> Python 3</li>
                     <li><strong>Networking:</strong> <code>socket</code> module</li>
                     <li><strong>Concurrency:</strong> <code>threading</code> module</li>
                     <li><strong>Terminal UX:</strong> <code>sys</code>, <code>print</code>, <code>input</code>, basic formatting</li>
                   </ul>

                   <p>Designed for clarity and learning, this project focuses on reliable connection management, simple UX in the terminal, and readable code structure that demonstrates core client/server patterns.</p>`,
  "Flashcard Study App": `<p>A clean and aesthetic flashcard study tool built using modern frontend technologies. Users can create, flip, and delete flashcards, with data saved locally in the browser. Designed to explore and demonstrate React, MobX, and TypeScript in a responsive UI layout.</p>
                            <ul>
                              <li>Built an interactive flashcard app with real-time flipping, deletion, and local persistence.</li>
                              <li>Developed reusable, modular React components to render and manage dynamic flashcards.</li>
                              <li>Used MobX for state management and TypeScript for type-safe component logic.</li>
                            </ul>
                          <p><strong>Features:</strong></p>
                            <ul>                     
                              <li>Add custom flashcards with front and back text</li>
                              <li>Flip cards to reveal answers with animations</li>
                              <li>Delete flashcards easily</li>
                              <li>Cards are displayed in a responsive horizontal grid layout</li>
                              <li>Landscape card view with cute pastel theme</li>
                              <li>Persistent storage using localStorage</li>
                            </ul>
                          <p>This was one of my first frontend projects, so I focused on learning how React works and built something I’d actually use from time to time.</p>
                          <p>I’m happy with the outcome and plan to sync it to a database later; for now, local persistence is sufficient.</p>`,

  "Personal Finance Tracker": `<p><strong>Personal Finance Tracker</strong> is a simple, modern web app for managing day-to-day finances. Users can add income and expense transactions, see live balance updates, and keep their data locally without a backend—perfect for quick personal budgeting.</p>

                              <p><strong>Features:</strong></p>
                              <ul>
                                <li>Add income and expense transactions with amounts and labels</li>
                                <li>Color-coded transaction list for quick visual scanning</li>
                                <li>Live balance calculation that updates instantly</li>
                                <li>Delete transactions with a single click</li>
                                <li>Persistent storage via <code>localStorage</code></li>
                                <li>Responsive, modern UI layout</li>
                              </ul>

                              <p><strong>Tech Stack:</strong></p>
                              <ul>
                                <li><strong>React</strong> – UI components</li>
                                <li><strong>TypeScript</strong> – type safety across the app</li>
                                <li><strong>MobX</strong> – application state management</li>
                                <li><strong>Vite</strong> – fast dev server and build tool</li>
                                <li><strong>CSS</strong> – custom styles and layout</li>
                                <li><strong>localStorage</strong> – data persistence across refreshes</li>
                              </ul>

                              <p>Built as a focused practice project to explore React with TypeScript and MobX, emphasizing a clean component structure, predictable state flows, and a lightweight persistence model.</p>`
}
