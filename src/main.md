## Luồng code :

3. Hoàn thiện trang NewQuote:

- Để đưa Author và text từ trang QuoteForm lên API Firebase làm như sau

* đưa Author và Text người dùng nhập thông qua
  props.onAddQuote({ author: enteredAuthor, text: enteredText }); vào NewQuote . khi đó event addQuoteHandler sẽ nhận Author và Text truyền vào sendRequest thông qua tham số quoteData . Lúc này Author và Text được đưa vào addQuote thông qua custom hook useHttp(addQuote) . Kết quả tôi dùng method POST để đưa Author và text lên API firebase với <url: https://lab-react-router-default-rtdb.firebaseio.com/quotes.json

- sau đó tôi lấy Author và text từ Firebase bằng cách gọi đến API và lấy data lưu vào mảng <transformedQuotes> với hàm <getAllQuotes>. Sau khi lấy được data
