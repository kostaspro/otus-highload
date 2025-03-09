\COPY users FROM PROGRAM 'unzip -p /src/users.zip' (format csv, header true, delimiter ',', encoding 'UTF8');
\COPY user_friends FROM PROGRAM 'unzip -p /src/user_friends.zip' (format csv, header true, delimiter ',', encoding 'UTF8');
\COPY posts FROM PROGRAM 'unzip -p /src/posts.zip' (format csv, header true, delimiter ',', encoding 'UTF8');
