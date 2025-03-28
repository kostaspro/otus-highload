/*
 * OTUS Highload Architect
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.2.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Runtime.Serialization;
using System.Text;
using Newtonsoft.Json;

namespace Otus.Highload.Models
{
    /// <summary>
    /// 
    /// </summary>
    [DataContract]
    public partial class User : IEquatable<User>
    { 
        /// <summary>
        /// Gets or Sets Id
        /// </summary>

        [DataMember(Name="id")]
        public string Id { get; set; }

        /// <summary>
        /// Имя
        /// </summary>
        /// <value>Имя</value>

        [DataMember(Name="first_name")]
        public string FirstName { get; set; }

        /// <summary>
        /// Фамилия
        /// </summary>
        /// <value>Фамилия</value>

        [DataMember(Name="second_name")]
        public string SecondName { get; set; }

        /// <summary>
        /// Gets or Sets Birthdate
        /// </summary>

        [DataMember(Name="birthdate")]
        public DateTime? Birthdate { get; set; }

        /// <summary>
        /// Интересы
        /// </summary>
        /// <value>Интересы</value>

        [DataMember(Name="biography")]
        public string Biography { get; set; }

        /// <summary>
        /// Город
        /// </summary>
        /// <value>Город</value>

        [DataMember(Name="city")]
        public string City { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class User {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  FirstName: ").Append(FirstName).Append("\n");
            sb.Append("  SecondName: ").Append(SecondName).Append("\n");
            sb.Append("  Birthdate: ").Append(Birthdate).Append("\n");
            sb.Append("  Biography: ").Append(Biography).Append("\n");
            sb.Append("  City: ").Append(City).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="obj">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return obj.GetType() == GetType() && Equals((User)obj);
        }

        /// <summary>
        /// Returns true if User instances are equal
        /// </summary>
        /// <param name="other">Instance of User to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(User other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;

            return 
                (
                    Id == other.Id ||
                    Id != null &&
                    Id.Equals(other.Id)
                ) && 
                (
                    FirstName == other.FirstName ||
                    FirstName != null &&
                    FirstName.Equals(other.FirstName)
                ) && 
                (
                    SecondName == other.SecondName ||
                    SecondName != null &&
                    SecondName.Equals(other.SecondName)
                ) && 
                (
                    Birthdate == other.Birthdate ||
                    Birthdate != null &&
                    Birthdate.Equals(other.Birthdate)
                ) && 
                (
                    Biography == other.Biography ||
                    Biography != null &&
                    Biography.Equals(other.Biography)
                ) && 
                (
                    City == other.City ||
                    City != null &&
                    City.Equals(other.City)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                var hashCode = 41;
                // Suitable nullity checks etc, of course :)
                    if (Id != null)
                    hashCode = hashCode * 59 + Id.GetHashCode();
                    if (FirstName != null)
                    hashCode = hashCode * 59 + FirstName.GetHashCode();
                    if (SecondName != null)
                    hashCode = hashCode * 59 + SecondName.GetHashCode();
                    if (Birthdate != null)
                    hashCode = hashCode * 59 + Birthdate.GetHashCode();
                    if (Biography != null)
                    hashCode = hashCode * 59 + Biography.GetHashCode();
                    if (City != null)
                    hashCode = hashCode * 59 + City.GetHashCode();
                return hashCode;
            }
        }

        #region Operators
        #pragma warning disable 1591

        public static bool operator ==(User left, User right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(User left, User right)
        {
            return !Equals(left, right);
        }

        #pragma warning restore 1591
        #endregion Operators
    }
}
